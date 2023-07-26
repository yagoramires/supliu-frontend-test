const useConvert = () => {
  const secondToMinutes = (seconds) => {
    const min = Math.floor(seconds / 60);
    const rest = seconds % 60;
    return `${min}:${rest.toString().padStart(2, '0')}`;
  };

  return { secondToMinutes };
};

export default useConvert;
