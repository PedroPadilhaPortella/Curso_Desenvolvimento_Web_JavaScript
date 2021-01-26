import Vue from 'vue';
import App from './App';
import store from './config/store';
import router from './config/router';

import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import './config/msg';

Vue.config.productionTip = false

//token temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIExlaXRhbyIsImVtYWlsIjoibGVvbmFyZG9AY29kM3IuY29tLmJyIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxMTY2NzAyNywiZXhwIjoxNjExOTI2MjI3fQ.eyPb98L645e0Y8g6MeAEP1zDcfPf8T0lQSMFWuS93LA';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')