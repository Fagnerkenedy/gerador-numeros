import { notification } from "antd";

const notify = ({ message, description, placement, type, duration, width, pauseOnHover }) => {
    if (!type) type = 'info';
    notification[type]({ // success, info, warning, error
        message: message,
        description: description,
        placement: placement, // topLeft, topRight, bottomLeft, bottomRight, top, bottom
        duration: duration, // 3 (segundos), null (caso não queira que suma sozinho)
        style: {
            width: width,
        },
        showProgress: true,
        pauseOnHover
    });
}

export default notify