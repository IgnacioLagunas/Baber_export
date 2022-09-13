import React from 'react'
import { createContext } from 'react'

export const languages = ["español", 'english'] 

const LanguageContext = createContext(languages[1])
export default LanguageContext