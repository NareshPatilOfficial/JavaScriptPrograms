
/**
 * FuctionalPrograms/replaceUserNameBL.
 * @module BasicPrograms/replaceUserNameBL
 */

module.exports = {
    /**
     * covert into valide Username.
     * @param {string} userName - it take username as string.
     * @return {string} valid username.
     */
    validName: function(userName) {
        var result = userName.replace(/[^a-zA-Z ]/g, "");
        return result;
    },

    
};