'use strict'

const validateList = (data) => {
    const emptyTitleErr = data.name ? null : "O campo de nome é obrigatório para concluir a ação."

    return emptyTitleErr
}

module.exports = {
    validateList
}