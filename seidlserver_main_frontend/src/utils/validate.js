
import jwt from 'jsonwebtoken'
const validate = () => {
    let dateNow = new Date();
    let user = jwt.decode(localStorage.getItem("jwt"))

    return !user || user.exp * 1000 < dateNow.getTime()
}

export default validate;