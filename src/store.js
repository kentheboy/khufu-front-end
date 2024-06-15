import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        envVariable: {
            env: '0',
        },
        businessHours: {
            open: 9,
            close: 18
        }
    },
});
