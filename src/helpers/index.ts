export const setValueToLocalStorage = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error);
  }
};

export const getValueFromLocalStorage = (item: string): { [key: string]: unknown } | null | undefined => {
  try {
    const hasItem = localStorage.getItem(item);
    if (hasItem) {
      const value = JSON.parse(hasItem)
      return value;
    }

    return null
  } catch (error) {
    console.log(error)
  }
}