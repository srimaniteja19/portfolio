import React, { useRef, useEffect, useState } from 'react';
import { Save, Trash2, Download, Edit3, Square, Circle, Undo, Redo } from 'lucide-react';
import './Canvas.css';

const AdvancedCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState('brush');
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth || 800;
      canvas.height = 400;
      
      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.strokeStyle = color;
      context.lineWidth = brushSize;
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      contextRef.current = context;

      // Save initial state
      const initialState = context.getImageData(0, 0, canvas.width, canvas.height);
      setHistory([initialState]);
      setHistoryStep(0);

      // Load saved notes
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setSavedNotes(JSON.parse(storedNotes));
      }
    }
  }, []);

  const saveToHistory = (imageData) => {
    const newHistory = history.slice(0, historyStep + 1);
    setHistory([...newHistory, imageData]);
    setHistoryStep(historyStep + 1);
  };

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setStartPos({ x: offsetX, y: offsetY });
    
    if (tool === 'brush') {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
    }
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = e.nativeEvent;
    const context = contextRef.current;
    const canvas = canvasRef.current;

    // Get the last valid state from history
    const lastValidState = history[historyStep];
    
    if (tool === 'brush') {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else {
      // Restore last state before drawing new shape
      context.putImageData(lastValidState, 0, 0);
      
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = brushSize;
      
      if (tool === 'rectangle') {
        const width = offsetX - startPos.x;
        const height = offsetY - startPos.y;
        context.rect(startPos.x, startPos.y, width, height);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(
          Math.pow(offsetX - startPos.x, 2) + Math.pow(offsetY - startPos.y, 2)
        );
        context.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      }
      context.stroke();
    }
  };

  const finishDrawing = () => {
    if (!isDrawing) return;

    contextRef.current.closePath();
    setIsDrawing(false);

    // Save the current state to history
    const canvas = canvasRef.current;
    const currentState = contextRef.current.getImageData(0, 0, canvas.width, canvas.height);
    saveToHistory(currentState);
  };

  const undo = () => {
    if (historyStep > 0) {
      const newStep = historyStep - 1;
      const imageData = history[newStep];
      contextRef.current.putImageData(imageData, 0, 0);
      setHistoryStep(newStep);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const newStep = historyStep + 1;
      const imageData = history[newStep];
      contextRef.current.putImageData(imageData, 0, 0);
      setHistoryStep(newStep);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Save the cleared state to history
    const clearedState = context.getImageData(0, 0, canvas.width, canvas.height);
    saveToHistory(clearedState);
  };

  const downloadCanvas = () => {
    const link = document.createElement('a');
    link.download = `${title || 'drawing'}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const saveNotes = () => {
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      notes,
      date: new Date().toLocaleDateString(),
      imageData: canvasRef.current.toDataURL()
    };

    const updatedNotes = [...savedNotes, newNote];
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    
    setTitle('');
    setNotes('');
    clearCanvas();
  };

  const deleteNote = (id) => {
    const updatedNotes = savedNotes.filter(note => note.id !== id);
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="main-container">
      <div className="canvas-container">
        <h1 className='canvas-h1'>Jot the Notes</h1>
        
        {/* Tools Panel */}
        <div className="tools-panel">
          <div className="tool-group">
            <button 
              className={`tool-btn ${tool === 'brush' ? 'active' : ''}`}
              onClick={() => setTool('brush')}
            >
              <Edit3 size={20} />
            </button>
            <button 
              className={`tool-btn ${tool === 'rectangle' ? 'active' : ''}`}
              onClick={() => setTool('rectangle')}
            >
              <Square size={20} />
            </button>
            <button 
              className={`tool-btn ${tool === 'circle' ? 'active' : ''}`}
              onClick={() => setTool('circle')}
            >
              <Circle size={20} />
            </button>
          </div>

          <div className="tool-group">
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                contextRef.current.strokeStyle = e.target.value;
              }}
              className="color-picker"
            />
            <div className="size-control">
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => {
                  setBrushSize(e.target.value);
                  contextRef.current.lineWidth = e.target.value;
                }}
                className="size-slider"
              />
              <span className="size-value">{brushSize}px</span>
            </div>
          </div>

          <div className="tool-group">
            <button 
              className={`tool-btn ${historyStep <= 0 ? 'disabled' : ''}`}
              onClick={undo}
              disabled={historyStep <= 0}
            >
              <Undo size={20} />
            </button>
            <button 
              className={`tool-btn ${historyStep >= history.length - 1 ? 'disabled' : ''}`}
              onClick={redo}
              disabled={historyStep >= history.length - 1}
            >
              <Redo size={20} />
            </button>
          </div>

          <div className="tool-group">
            <button 
              className="tool-btn clear-btn"
              onClick={clearCanvas}
            >
              <Trash2 size={20} />
            </button>
            <button 
              className="tool-btn download-btn"
              onClick={downloadCanvas}
            >
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseLeave={finishDrawing}
            onMouseMove={draw}
          />
        </div>

        {/* Notes Section */}
        <div className="notes-grid">
          <div className="notes-section">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
              className="title-input"
            />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes..."
              className="notes-input"
            />
            <button onClick={saveNotes} className="save-btn">
              <Save size={20} />
              Save Notes
            </button>
          </div>

          {/* Saved Notes */}
          <div className="saved-notes">
            <h2>Saved Notes</h2>
            <div className="notes-list">
              {savedNotes.map((note) => (
                <div key={note.id} className="note-card">
                  <div className="note-header">
                    <h3>{note.title}</h3>
                    <button 
                      onClick={() => deleteNote(note.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p>{note.notes}</p>
                  <img src={note.imageData} alt={note.title} />
                  <span className="note-date">{note.date}</span>
                </div>
              ))}
              {savedNotes.length === 0 && (
                <p className="empty-message">No saved notes yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCanvas;