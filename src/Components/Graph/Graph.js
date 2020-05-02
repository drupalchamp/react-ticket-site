import React from 'react';
import './Graph.css';
import { PieChart } from 'react-minimal-pie-chart';


export default class Graph extends React.Component {
  render() {
    return (
      <section className="whole-graph-area">
        <div className="graph-title center">Ticket Report</div>
        <div className="graph-area">
          <PieChart
            data={[
              { title: 'Paid', value: this.props.statusData.paid, color: '#67b7dc' },
              { title: 'Unpaid', value: this.props.statusData.unpaid, color: '#fdd400' },
              { title: 'Canceled', value: this.props.statusData.canceled, color: '#84b761' },
            ]}
            radius={PieChart.defaultProps.radius - 10}
            
            startAngle={-90}  
            paddingAngle={0}
            segmentsShift={0.5}
            
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            labelPosition={110}
            labelStyle={{ fontSize: '4px', fill: '#000', }}

            style={{ position: 'relative'}}
            lineWidth={50}

            animate={true}
            animationDuration={1000}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          />
        </div>
        <div className="graph-legend-area">
            <span className="graph-legend legend-1">
              <span className="legend-lable">Paid</span>
              <span className="legend-value">- {this.props.statusData.paid}</span>
            </span>
            <span className="graph-legend legend-2">
              <span className="legend-lable">Unpaid</span>
              <span className="legend-value">- {this.props.statusData.unpaid}</span>
            </span>
            <span className="graph-legend legend-3">
              <span className="legend-lable">Canceled</span>
              <span className="legend-value">- {this.props.statusData.canceled}</span>
            </span>
        </div>	
      </section>
    );
  }
}