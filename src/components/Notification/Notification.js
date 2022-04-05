import { ROOT_MODAL } from '../../constants/root';
import * as classes from "./Notifications.css";
import imgCloseBlack from './img/close-blac.svg'

class Notification {

  render () {
    const htmlWrapper = `
      <div class="${classes.notification__container}">
        <span>Нет контента</span>
        <button
        class="btn ${classes.notification__close}"
        onclick="modal.innerHTML = ''"
        style="background-image: url(${imgCloseBlack})"
        >
        ✖
        </button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper
  }
}

export default new Notification()