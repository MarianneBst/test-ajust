import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { MAX_LEVEL, OPERATION_ON_GAUGE } from './models/gauge-models.component';
import { GaugeService } from './services/gauge.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './main-gauge.component.html',
  styleUrls: ['./main-gauge.component.sass']
})
export class MainGaugeComponent implements OnInit, OnDestroy{

  levelGauge$ = new BehaviorSubject<number>(0);
  maxLevelGauge = MAX_LEVEL;
  gaugeSettingForm: FormGroup;
  private incrementNumber = 1;
  private subscription = new Subscription;

  constructor(
    private gaugeService: GaugeService
  ) {}

  ngOnInit(): void {
    this.gaugeSettingForm = new FormGroup({
      valueIncrement: new FormControl(1),
      startLevel: new FormControl(0)
    });

    this.subscription.add(this.gaugeSettingForm.get('startLevel')?.valueChanges.pipe(
      tap(startLevelValue => this.levelGauge$.next(startLevelValue))
    ).subscribe());

    this.subscription.add(this.gaugeSettingForm.get('valueIncrement')?.valueChanges.pipe(
      tap(valueIncrement => this.incrementNumber = valueIncrement)
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  levelUp(): void {
    const newLevel = this.gaugeService.changeLevel(this.levelGauge$.getValue(), this.incrementNumber, OPERATION_ON_GAUGE.UP)
    if (newLevel <= this.maxLevelGauge) {
      this.levelGauge$.next(newLevel);
    }
  }

  levelDown(): void {
    const newLevel = this.gaugeService.changeLevel(this.levelGauge$.getValue(), this.incrementNumber, OPERATION_ON_GAUGE.DOWN)
    if (newLevel >= 0) {
      this.levelGauge$.next(newLevel);
    }
  }

}
