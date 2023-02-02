module.exports = {
    formatDate: (date) => {
      const formattedDate = new Date(date).toLocaleDateString();
      return formattedDate;
    },
    
    truncateText: (text, length) => {
      if (text.length > length) {
        return `${text.substring(0, length)}...`;
      }
      return text;
    }
  };
  