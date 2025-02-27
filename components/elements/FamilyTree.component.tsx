import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import type { ChartConfiguration } from 'chart.js';
import {TreeController, EdgeLine } from "chartjs-chart-graph";

Chart.register(...registerables, TreeController, EdgeLine);

type FamilyTreeProps = {
  nodes: Array<any>;
}

export const FamilyTree = ({ nodes }: FamilyTreeProps ) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      if (!chartRef.current) return;
  
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;
  
        const data: ChartConfiguration<'tree'>['data'] = {
            labels: nodes.map((d: any) => d.name),
            datasets: [
              {
                pointBackgroundColor: 'steelblue',
                pointRadius: 10,
                data: nodes.map((d: any) => Object.assign({}, d)),
              },
            ],
          };

        const config = {
            type: 'tree',
            data,
            options: {
              plugins: {
                datalabels: {
                  display: false,
                },
              },
              tree: {
                mode: 'tree',
                // orientation: 'vertical',
                // orientation: 'radial',
              },
            },
          };
          
  
      const chart = new Chart(ctx, {
        type: "tree",
        data,
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          layout: {
            padding: 10,
          },
        },
      });
  
      return () => chart.destroy();
    }, []);
  
    return <canvas ref={chartRef} />;
  };
