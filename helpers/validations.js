'use strict'

const validateList = (data) => {
    const emptyTitleErr = data.name ? null : "O campo de nome é obrigatório para concluir a ação."

    return emptyTitleErr
}

const validateItem = (data) => {
    const emptyTitleErr = data.name ? null : "O campo de nome é obrigatório para concluir a ação."
    const emptyStatusErr = data.status ? null : "O campo de status é obrigatório para concluir a ação."

    return emptyTitleErr || emptyStatusErr
}

module.exports = {
    validateList,
    validateItem
}