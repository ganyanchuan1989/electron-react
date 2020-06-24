import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '@/redux/actions/counter'

import styles from './index.less'
function Counter ({ counter, increase, decrease }) {
  const { count } = counter
  return (
    <div className={styles.Container}>
      <div className={styles.LogoContainer}>
        <img src={require('@/assets/img/electron.png')} />
        <span>Electron-React</span>
      </div>
      <div className={styles.Counter}>
        <h1>Counter</h1>
        <p>{count}</p>
        <div className={styles.Btns}>
          <span onClick={() => { increase() }}>+</span>
          <span onClick={() => { decrease() }}>-</span>
        </div>
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
