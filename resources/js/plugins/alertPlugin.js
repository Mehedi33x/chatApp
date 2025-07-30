// src/plugins/alertPlugin.js
import Swal from 'sweetalert2';

export default {
    install(app) {
        app.config.globalProperties.$alert = ({
            type = 'info',
            title = '',
            text = '',
            timer = 3000,
            position = 'top-end',
            toast = true,
            showConfirmButton = false
        } = {}) => {
            Swal.fire({
                icon: type,
                title,
                text,
                timer,
                position,
                toast,
                showConfirmButton
            });
        };
    }
};
