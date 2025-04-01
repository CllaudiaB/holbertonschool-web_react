function NotificationItem({ type, html, value }) {
    if(html){
        return <li style={{color: type === "default" ? "blue": "red"}} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    } else {
        return <li style={{color: type === "default" ? "blue": "red"}} data-notification-type={type}>{value}</li>
    }
};

export default NotificationItem;
