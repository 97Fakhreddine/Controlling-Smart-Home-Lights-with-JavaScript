const LightModel = require("../model/LightModel");

const LightController = {
    getAllLights: async (req, res) => {
        try {
            const lights = await LightModel.getLights();
            res.json(lights);
        } catch (error) {
            res.status(500).json({ error: "An error occurred while fetching lights." });
        }
    },

    toggleLight: async (req, res) => {
        const { lightId, on } = req.body;
        try {
            await LightModel.toggleLight(lightId, on);
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error: "An error occurred while toggling the light." });
        }
    },
};

module.exports = LightController;
