import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

class FootballPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      nickname: '',
      age: '',
      team: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { names, nickname, age, team } = this.state;

    // Ajusta el endpoint de la API según tus necesidades
    axios.post('http://localhost:5000/contentplayer', {
      names,
      nickname,
      age,
      team,
    })
      .then(() => alert('Futbolista registrado con éxito'))
      .catch(() => alert('Error al registrar al futbolista'));
  };

  render() {
    const containerStyle = {
      backgroundColor: '#1f2040', // Azul oscuro, como el de Boca Juniors
      padding: '20px',
      color: 'yellow', // Texto amarillo
    };

    const inputStyle = {
      backgroundColor: 'yellow', // Fondo amarillo para casillas de nombres
    };

    return (
      <div style={containerStyle}>
        <Typography variant="h4" style={{ color: 'yellow' }}>Formulario de Futbolista</Typography>
        <form onSubmit={this.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <TextField
              label="Nombre"
              name="names"
              value={this.state.names}
              onChange={this.handleInputChange}
              margin="normal"
              style={inputStyle}
            />
            <TextField
              label="Apodo"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleInputChange}
              margin="normal"
              style={inputStyle}
            />
            <TextField
              label="Edad"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              margin="normal"
              style={inputStyle}
            />
            <TextField
              label="Equipo"
              name="team"
              value={this.state.team}
              onChange={this.handleInputChange}
              margin="normal"
              style={inputStyle}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </div>
    );
  }
}

export default FootballPlayerForm;
