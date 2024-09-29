const ToggleButton = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: '10px 20px',
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {isOn ? 'Encendido' : 'Apagado'}
    </button>
  );
};

export default ToggleButton;
