import {Injectable} from '@angular/core';
import {GrievanceRecordInterface, TopCriticalDensityInterface} from './work-orders.model';

@Injectable({
    providedIn: 'root',
})
export class WorkOrdersService {
    private topCriticalDensity: TopCriticalDensityInterface = {
        areaName: 'Kolothia, Khandagiri',
        description: '12 Pending Work-orders'
    };

    private grievanceRecords: GrievanceRecordInterface[] = [
        { rank: '01', grievanceId: 'GR-9001', grievanceType: 'Structural Failure - Bridge P-12', priorityScore: '94', assignedTeam: 'Rapid Assessment A', assignedTeamContact: '9001000001' },
        { rank: '02', grievanceId: 'GR-9002', grievanceType: 'Main Water Line Contamination', priorityScore: '88', assignedTeam: 'Municipal Utilities', assignedTeamContact: '9001000002' },
        { rank: '03', grievanceId: 'GR-9003', grievanceType: 'Street Light Grid Failure', priorityScore: '72', assignedTeam: 'Electrification Team', assignedTeamContact: '9001000003' },
        { rank: '04', grievanceId: 'GR-9004', grievanceType: 'Pothole Cluster - Major Arterial', priorityScore: '64', assignedTeam: 'Public Works', assignedTeamContact: '9001000004' },
        { rank: '05', grievanceId: 'GR-9005', grievanceType: 'Sewage Overflow - Sector 9', priorityScore: '91', assignedTeam: 'Sanitation Dept', assignedTeamContact: '9001000005' },
        { rank: '06', grievanceId: 'GR-9006', grievanceType: 'Traffic Signal Malfunction - Junction 5', priorityScore: '77', assignedTeam: 'Traffic Control', assignedTeamContact: '9001000006' },
        { rank: '07', grievanceId: 'GR-9007', grievanceType: 'Illegal Dumping - Riverside', priorityScore: '59', assignedTeam: 'Environmental Unit', assignedTeamContact: '9001000007' },
        { rank: '08', grievanceId: 'GR-9008', grievanceType: 'Power Outage - Zone B', priorityScore: '85', assignedTeam: 'Grid Operations', assignedTeamContact: '9001000008' },
        { rank: '09', grievanceId: 'GR-9009', grievanceType: 'Road Cave-in - Industrial Area', priorityScore: '92', assignedTeam: 'Emergency Works', assignedTeamContact: '9001000009' },
        { rank: '10', grievanceId: 'GR-9010', grievanceType: 'Drainage Blockage - Sector 3', priorityScore: '68', assignedTeam: 'Stormwater Team', assignedTeamContact: '9001000010' },
        { rank: '11', grievanceId: 'GR-9011', grievanceType: 'Public Park Vandalism', priorityScore: '51', assignedTeam: 'Parks & Recreation', assignedTeamContact: '9001000011' },
        { rank: '12', grievanceId: 'GR-9012', grievanceType: 'Gas Leak - Residential Block A', priorityScore: '96', assignedTeam: 'Hazard Response', assignedTeamContact: '9001000012' },
        { rank: '13', grievanceId: 'GR-9013', grievanceType: 'Broken Footpath - Downtown', priorityScore: '60', assignedTeam: 'Urban Maintenance', assignedTeamContact: '9001000013' },
        { rank: '14', grievanceId: 'GR-9014', grievanceType: 'Flooding - Low Lying Area', priorityScore: '89', assignedTeam: 'Disaster Management', assignedTeamContact: '9001000014' },
        { rank: '15', grievanceId: 'GR-9015', grievanceType: 'Bus Stop Shelter Damage', priorityScore: '55', assignedTeam: 'Transit Authority', assignedTeamContact: '9001000015' },
        { rank: '16', grievanceId: 'GR-9016', grievanceType: 'Tree Collapse Blocking Road', priorityScore: '83', assignedTeam: 'Green Response Team', assignedTeamContact: '9001000016' },
        { rank: '17', grievanceId: 'GR-9017', grievanceType: 'Noise Pollution - Industrial Zone', priorityScore: '49', assignedTeam: 'Regulatory Board', assignedTeamContact: '9001000017' },
        { rank: '18', grievanceId: 'GR-9018', grievanceType: 'Water Logging - Market Area', priorityScore: '74', assignedTeam: 'Drainage Ops', assignedTeamContact: '9001000018' },
        { rank: '19', grievanceId: 'GR-9019', grievanceType: 'Fire Hydrant Malfunction', priorityScore: '67', assignedTeam: 'Fire Services Support', assignedTeamContact: '9001000019' },
        { rank: '20', grievanceId: 'GR-9020', grievanceType: 'Unauthorized Construction', priorityScore: '70', assignedTeam: 'Building Authority', assignedTeamContact: '9001000020' }
    ];

    getTopCriticalDensity(): TopCriticalDensityInterface {
        return this.topCriticalDensity;
    }

    getGrievanceRecords(): GrievanceRecordInterface[] {
        return this.grievanceRecords;
    }
}
