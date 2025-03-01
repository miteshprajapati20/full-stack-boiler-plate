const handleError = async (res, status, message) => {
    return res.status(status).json({
        success:false,
        message: message
    })
}

module.exports = { handleError }