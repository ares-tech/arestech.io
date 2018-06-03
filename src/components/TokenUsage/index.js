import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { PieChart, Pie, Cell } from 'recharts'
import tokenUsage from './tokenUsage'
import './index.css'

const cellColors = ['#ff6427', '#001ada', '#ce38da', '#7400a4', '#ffb158']

const chartData = [
  {
    name: 'Legal & Contingency',
    value: 10,
  },
  {
    name: 'Technical Development',
    value: 40,
  },
  {
    name: 'Marketing',
    value: 20,
  },
  {
    name: 'Community Operations',
    value: 20,
  },
  {
    name: 'Development Grants',
    value: 10,
  },
]

const TokenUsage = () => (
  <div id="usage" className="token-usage-section">
    <div className="background-container">
      <div className="custom-shape custom-shape-1" />
    </div>
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="display-2 headline pb-4" style={{ color: '#00d0ff' }}>
            <FormattedMessage id="token.usage.title" />
          </h1>
        </Col>
      </Row>

      <div className="token-usage-distribute-chart">
        <div className="token-usage-distribute-chart mobile-only" style={{ display: 'none' }} />
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
              textAnchor="end"
              dataKey="value"
            >
              {chartData.map((entry, index) => <Cell key={entry.name} fill={cellColors[index % cellColors.length]} />)}
            </Pie>
          </PieChart>
        </div>
        {tokenUsage.map(({ color, text, textColor }, index) => (
          <div key={text} className="token-usage-item-container" style={{ paddingTop: '4rem' }}>
            <div className={`p-2 token-usage-item token-usage-item-${index}`} style={{ backgroundColor: color }}>
              <span style={{ color: textColor, fontWeight: 'bold' }}>
                <FormattedMessage id={text} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default TokenUsage
