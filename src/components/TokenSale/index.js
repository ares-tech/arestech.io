import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { PieChart, Pie, Cell } from 'recharts'
import './index.css'

const tokenSales = [
  {
    text: '10% Community Support',
    color: '#ff6427',
    textColor: '#7400a4',
  },
  {
    text: '5% Advisors & Partners',
    color: '#001ada',
    textColor: '#00d0ff',
  },
  {
    text: '5% Reward & Airdrop',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: '5% Strategic Cooperation',
    color: '#00d0ff',
    textColor: '#001ada',
  },
  {
    text: '30% Token Sale',
    color: '#001ada',
    textColor: '#00d0ff',
  },
  {
    text: '20% Team',
    color: '#ce38da',
    textColor: '#7400a4',
  },
  {
    text: '15% Initial Prize Pool',
    color: '#7400a4',
    textColor: '#ce38da',
  },
  {
    text: '10% Future Employees',
    color: '#ffb158',
    textColor: '#ff6427',
  },
]

const cellColors = ['#ff6427', '#001ada', '#ce38da', '#00d0ff', '#001ada', '#ce38da', '#7400a4', '#ffb158']

const chartData = [
  {
    name: 'Community Support',
    value: 10,
  },
  {
    name: 'Advisors',
    value: 5,
  },
  {
    name: 'Reward',
    value: 5,
  },
  {
    name: 'Strategic Cooperation',
    value: 5,
  },
  {
    name: 'Token Sale',
    value: 30,
  },
  {
    name: 'Team',
    value: 20,
  },
  {
    name: 'Initial Prize Pool',
    value: 15,
  },
  {
    name: 'Future Employees',
    value: 10,
  },
]

const TokenSales = () => (
  <div id="token-sale" className="token-sale-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline pb-4" style={{ color: '#ce38da' }}>
            Token Sales
          </h1>
        </Col>
      </Row>

      <div className="token-sale-distribute-chart">
        <div className="token-sale-distribute-chart mobile-only" style={{ display: 'none' }} />
        <div className="pie-chart">
          <PieChart width={320} height={320}>
            <Pie 
              data={chartData} 
              cx={150} 
              cy={150}
              labelLine={false}
              innerRadius={95} 
              outerRadius={150}
              startAngle={108}
              endAngle={-252}
              fill="#ededed"
              textAnchor='end'
              dataKey="value"
            >
              {
                chartData.map((entry, index) => <Cell key={index} fill={cellColors[index % cellColors.length]} />)
              }
            </Pie>
          </PieChart>
        </div>
        {tokenSales.map(({ color, text, textColor }, index) => (
          <div key={text} className="token-sale-item-container" style={{ paddingTop: '4rem' }}>
            <div className={`p-2 token-sale-item token-sale-item-${index}`} style={{ backgroundColor: color }}>
              <span style={{ color: textColor, fontWeight: 'bold' }}>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>    
  </div>
)

export default TokenSales
