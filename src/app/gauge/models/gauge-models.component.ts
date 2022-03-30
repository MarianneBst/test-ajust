export interface IGaugeSetting {
    valueIncrement: number;
    startLevel: number;
}

export const MAX_LEVEL = 200;

export const OPERATION_ON_GAUGE = {
    UP: 'up',
    DOWN: 'down'
};