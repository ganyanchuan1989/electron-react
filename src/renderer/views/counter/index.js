import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '@/redux/actions/counter'
import { HomeOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'

import styles from './index.less'
function Counter ({ counter, increase, decrease }) {
  const { count } = counter
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <Link to="/"><HomeOutlined className={styles.HomeIcon} /></Link>
        <h1>Counter</h1>
      </div>
      <p>{count}</p>
      <div className={styles.Btns}>
        <span onClick={() => { increase() }}>+</span>
        <span onClick={() => { decrease() }}>-</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { counter: state.counter }
}

/*
 * 利用Redux的ActionCreator和react-redux的connect实现简写。
 * react-redux会自动包装成ActionCreator，关键源码：mapDispatch = wrapActionCreators(mapDispatchToProps)
 */
const mapDispatchToProps = {
  increase,
  decrease,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
