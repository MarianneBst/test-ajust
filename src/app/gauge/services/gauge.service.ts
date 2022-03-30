import { Injectable } from '@angular/core';
import { OPERATION_ON_GAUGE } from '../models/gauge-models.component';

@Injectable({
  providedIn: 'root'
})
export class GaugeService {

  constructor() { }

  /**
   * Return the new level of the gauge
   * @param currentLevel 
   * @param incrementGap 
   * @param operation 
   * @returns 
   */
  changeLevel(currentLevel: number, incrementGap: number, operation: string): number {
    switch(operation) {
      case OPERATION_ON_GAUGE.UP: return currentLevel+incrementGap;
      case OPERATION_ON_GAUGE.DOWN: return currentLevel-incrementGap;
      default: return currentLevel;
    }
  }
}
