const isAllUpperCase = (word: string): boolean => /^[A-Z]+$/.test(word);
const isAllLowerCase = (word: string): boolean => /^[a-z]+$/.test(word);
const isFirstLetterUpperCase = (word: string): boolean => /^[A-Z][a-z]+$/.test(word);

const detectCapitalUse = (word: string): boolean => {
    if(word.length < 1 || word.length > 100) return false
    return isAllUpperCase(word) || isAllLowerCase(word) || isFirstLetterUpperCase(word);
};