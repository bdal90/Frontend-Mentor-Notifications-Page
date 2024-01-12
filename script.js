const notificationItemEl = document.querySelectorAll('.main__notification-item');
const redDotEl = document.querySelectorAll('.red-dot');
const notificationCounterEl = document.querySelector('.header__nbr');
const notificationRightSideEl = document.querySelectorAll('.notification-right-side');
const markAllEl = document.querySelector('.header__text');

const markAllAsRead = () => {
    // set counter to 0
    notificationCounterEl.textContent = 0

    //remove red dot
    redDotEl.forEach(redDot => {
        redDot.classList.add('read')
    })

    // remove bg color
    notificationItemEl.forEach(notification => {
        notification.classList.remove('main__notification-item--unread')
    })
}

const markItemAsRead = () => {
    notificationItemEl.forEach(notification => {
        notification.addEventListener('click', () => {
            
            if ([...notification.classList].includes('main__notification-item--unread')) {
                // remove bg color
                notification.classList.remove('main__notification-item--unread');

                // get value of notif. counter & set it to be nbr
                const counterCurrentValue = +notificationCounterEl.textContent

                // decrement counter by 1
                const newValue = counterCurrentValue - 1;
                
                // show new value
                notificationCounterEl.textContent = newValue

                // remove red dot
                redDotEl.forEach(redDot => {
                    const parentNode = redDot.parentNode.parentNode.parentNode;
                    console.log(parentNode)
                    if (![...parentNode.classList].includes('main__notification-item--unread')) {
                        redDot.classList.add('read')
                    }
                })
            }
        })
    })
}


markAllEl.addEventListener('click', markAllAsRead)
markItemAsRead()

