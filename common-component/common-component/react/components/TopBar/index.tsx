import React from 'react';
import styles from './styles.css';
//import { GoogleTranslate } from '../GoogleTranslate'

export const TopBar = () => {

  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <span>
                    Portal
                </span>
                <span>
                    |
                </span>
                <span>
                    Cadastre-se
                </span>
                <span>
                    |
                </span>
                <span>
                    Pedido Rápidos
                </span>
            </div>
        </div>
    </>
  )
}

TopBar.schema = {
  title: 'TopBar',
}