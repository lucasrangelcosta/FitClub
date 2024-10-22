import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>comece sua</span>
                <span>jornada com</span>
                <span className='stroke-text'>a gente hoje!</span>
            </div>

            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" >
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>Veja os demais benefícios -></span>
                        </div>
                        <button className="btn">Clique aqui!</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans