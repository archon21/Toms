import React, { memo } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import store from '../../store'
import {Typography, Inputs} from '../index'
import Util from '../../util'


const RenderedText = memo(() => {



    return (

    )

}, (prevProps, nextProps) => {
    return true
})

interface TextProps {
    accessor: string;

}

const Text: React.FC<TextProps> = (props) => {
    const {user} = store
    const {accessor}  = props;


    if(user?.roles?.includes('admin')) return <Inputs.SlateEditor />

    else return <RenderedText/>

       
}

export default observer(Text)