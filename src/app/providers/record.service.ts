import { Injectable } from '@angular/core';
import { Record, ParkingFees } from '../model/record';

@Injectable()
export class RecordService {

  constructor() { }

  getRecords(): Record[] {
    return RECORDS_MOCK;
  }
}

const RECORDS_MOCK: Record[] = [
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record,
  {
    year: 2017,
    number: 1,
    userName: 'aaa',
    parkingFees: {
      january: 8000,
      february: 8000,
      march: 8000,
      april: 8000,
      may: 8000,
      june: 8000,
      july: 8000,
      august: 8000,
      september: 8000,
      october: 8000,
      november: 8000,
      december: 8000
    } as ParkingFees,
    updateMonth: 2,
    note: 'empty'
  } as Record
];
