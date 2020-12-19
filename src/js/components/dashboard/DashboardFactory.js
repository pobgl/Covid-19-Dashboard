import Dashboard from './Dashboard';
import DashboardWithCoefficient from './DashboardCoefficient';

export default class DashboardFactory {
    static list = {
        absolute: Dashboard,
        coefficient: DashboardWithCoefficient
    };

    create(type = 'absolute') {
        const myDashboard = DashboardFactory.list[type];
        const board = new myDashboard();
        return board;
    }
}