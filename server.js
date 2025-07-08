const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/crear-ticket', async (req, res) => {
    try {
        const response = await axios.post(
            'https://farbiopharma.com/soporte/api/tickets.json', // Cambia esto
            req.body,
            {
                headers: {
                    'X-API-Key': 'TU_API_KEY', // Cambia esto
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json({ mensaje: 'Ticket enviado', data: response.data });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'No se pudo enviar el ticket' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
