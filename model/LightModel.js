const hue = require("node-hue-api");
const HueApi = hue.HueApi;

const bridgeIp = "YOUR_BRIDGE_IP_ADDRESS";
const username = "YOUR_HUE_USERNAME";

const api = new HueApi(bridgeIp, username);

const LightModel = {
    // Get a list of available lights
    getLights: async () => {
        try {
            const lights = await api.lights();
            return lights;
        } catch (error) {
            throw error;
        }
    },

    // Turn a specific light on or off
    toggleLight: async (lightId, on) => {
        try {
            const state = { on };
            await api.setLightState(lightId, state);
        } catch (error) {
            throw error;
        }
    },
};

module.exports = LightModel;
