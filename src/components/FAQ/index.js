import React, {useState} from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Data } from './Data';
import { FAQSection, FAQH1, FAQContainer, FAQWrap, Dropdown } from './FAQElements'

function FAQ() {
const [clicked, setCliked] = useState(false)

const toggle = index => {
    if(clicked === index) {
        return setCliked(null)
    }

    setCliked(index)
}

    return (
        <IconContext.Provider value= {{ color: '#FFF', size: '25px'}}>
            <FAQSection id='FAQ'>
                <FAQContainer>
                <FAQH1> FAQ </FAQH1>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <FAQWrap onClick={() => toggle(index)} key={index}>
                                <h2>{item.question}</h2>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus / >}</span>
                            </FAQWrap>
                            {clicked === index ? (
                            <Dropdown> 
                                <p>{item.answer}</p>
                            </Dropdown>
                            ) : null}
                            </>
                        );
                    })}
                </FAQContainer>
            </FAQSection>
        </IconContext.Provider>
    )
}

export default FAQ
