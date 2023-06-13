import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Pie, PieChart, Cell } from 'recharts';

interface Section {
    value: number;
    label: string;
}

interface RoundDiagramProps {
    sections: Section[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        padding: theme.spacing(2),
    },
}));

export const RoundDiagram: React.FC<RoundDiagramProps> = ({ sections }) => {
    const classes = useStyles();

    const data = sections.map((section) => ({
        name: section.label,
        value: section.value,
    }));

    return (
        <Paper className={classes.root}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={(entry) => `${entry.name}: ${(entry.value / data.reduce((a, b) => a + b.value, 0) * 100).toFixed(2)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </Paper>
    );
};
