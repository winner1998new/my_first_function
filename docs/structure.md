# Структура приложения
## Компоненты приложения
## Классовая структура Зоопарка
  1. СControlBlock
      - employees: Array<CEmployee>;
      - equipments: Array<CEquipment>;
      - installations: Array<CInstallation>;
      - financialBlock: CFinancialBlock;
      - scienceBlock: CScienceBlock;
      - cyberBlock: CCyberBlock;
      - director: string;
      - securityReports: Array<ISecurityReport>;
      - fabricPlan: Array<string>;
      - fabricDirection: string;
      - fabricInvestigations: Array<IInvestigations>;
      - #checkFinance(): void;
      - getFullFabricInfo(): void;
      - #checkEmployee(): void;
      - #checkDetals(): void;
      - #checkProduct(): void;
      - #createPlanOfSecurityCheckReport(): Array<ISecurityReport>;
      - checkFabricBlocks(): void;
      1. CFinancialBlock
          - employees: Array<CEmployee>;
          - equipments: Array<CEquipment>;
          - installations: Array<CInstallation>;
          - budget: number;
          - financialReports: Array<number>;
          - moneyInBank: number;
          - debtClients: number;
          - dedtFabric: number;
          - preCalculationOfPrice(): number;
          - calculationOfFinancialYear(price: number, financialReports: Array<IFinancialReport>): Array<IFinancialReport;
          - checkBudget(): void;
          - createFinancialReport(data): IFinancialReport;
      2.CScienceBlock
          - employees: Array<CEmployee>;
          - equipments: Array<CEquipment>;
          - installations: Array<CInstallation>;
          - investigations: Array<IInvestigations>;
          - createInvestigation(data: IInvestigations): void;
          - updateInvestigation(data: IInvestigations, index: number): void;
          - removeInvestigation(index: number): void;
      3. CCyberBlock
          - employees: Array<CEmployee>;
          - equipments: Array<CEquipment>;
          - installations: Array<CInstallation>;
          - cyberSecurityReports: Array<ISecurityReport>;
          - createCyberSecurityReports(data: ISecurityReport): void;
          - updateCyberSecurityReports(data: ISecurityReport, index: number): void;
          - removeCyberSecurityReports(index: number): void;
  2. CEmployee
      - name: string;
      - profession: string;
      - experience: string;
      - sex: string;
      - oklad: number;
      - equipments: Array<CEquipment>;
      - age: number;
      - isWorkingNow: boolean;
      - checkYourEquipment(): void;
      - changeSmenaStatus(): void;
  3. CEquipment
      - status: string;
      - material: string;
      - dateBought: string;
      - serviceLife: number; 
      - vendor: string;
      - instruction: string;
      - hasGuarantee: boolean
      - price: number;
  4. CInstallation extends CEquipment
      - useEquipment(): void;
  5. CNodes
      - employees: Array<CEmployee>;
      - equipments: Array<CEquipment>;
      - installations: Array<CInstallation>;
      - createLada(data: СStandartAutoComplectation): CLadaType;
      - createGaz(СStandartAutoComplectation): CGAZType;
      - createKamaz(СStandartAutoComplectation): CKamazType;
      - createZaz(СStandartAutoComplectation): CZAZType;
      - createMaz(СStandartAutoComplectation): CMAZType;
      1. СSample
          - concept: string;
          - functionality: string;
          - height: number;
          - width: number;
      2. СModel extends СSample
          - material: string;
          - amountOfDoors: number;
      3. СBody
          - timeOfCreation: string;
          - serial: string;
          - dateOfCreation: strig;
          - details: string;
          - lifespan: string;
          - placeForDoors: number;
          - capacity: number;
          - weightLimit: number;
      4. СFrame
          - timeOfCreation: string;
          - serial: string;
          - lifespan: string;
          - dateOfCreation: strig;
          - details: string;
      5. СChassis
          - timeOfCreation: string;
          - serial: string;
          - lifespan: string;
          - dateOfCreation: strig;
          - details: string;
          - rotationAngle: number;
          - amountWheel: number;
      6. СEngine
          - timeOfCreation: string;
          - serial: string;
          - brand: string;
          - name: string;
          - lifespan: string;
          - power: number;
          - consumption: string;
          - efficiency: number;
          - guarantee: string;
      7. СElectrics
          - timeOfCreation: string;
          - serial: string;
          - brand: string;
          - hasDynamic: boolean;
          - hasNavigation: boolean;
          - hasAutopilot: boolean;
          - hasCamera: boolean;
          - lifespan: string;
          - hasSignalling: boolean;
      8. СComfort
          - imeOfCreation: string;
          - serial: string;
          - lifespan: string;
          - vehicleEquipment: string;
          - hasAirConditioner: boolean;
          - hasMusicDevice: boolean;
          - seat: Array<ISeat>;
      9. СComponents extends СModel
          - body: СBody;
          - frame: СFrame;
          - chassis: СChassis;
          - engine: СEngine;
          - electrics: СElectrics;
          - comfort: СComfort;
          - price: number; 
          - showCarParams(): void;
          - showCarStatus(): void;
      10. СAssembly
          - isDoorOpened: boolean;
          - music: IMusic;
          - radio: IRadio;
          - isDoorLocked: boolean;
          - isGabageLocked: boolem;
          - isSignaling; boolean;
          - lightStatus: Array<string>;
          - windows: Array<string>;
          - direction: string;
          - run(): void;
          - stop(): void;
          - interactDoor(): void;
          - interactMusic(): void;
          - interactLocks(); void;
          - interactSignaling(): void;
          - interactLighting(): void;
          - interactWindows(): void;
          - interactRadio(): void;
          - interactSound(): void;
          - showCarParams(): void;
          - showCarStatus(): void;
      11. CLadaType extends СAssembly
      12. CGAZType extends СAssembly
      13. CKamazType extends СAssembly
      14. CZAZType extends СAssembly
      15. CMAZType extends СAssembly
      16. СStandartAutoComplectation
          - isDoorOpened: boolean;
          - music: IMusic;
          - radio: IRadio;
          - isDoorLocked: boolean;
          - isGabageLocked: boolem;
          - isSignaling; boolean;
          - lightStatus: Array<string>;
          - windows: Array<string>;
          - direction: string;
          - components: {
              - body: {
                timeOfCreation: string;
                serial: string;
                dateOfCreation: strig;
                details: string;
                lifespan: string;
                placeForDoors: number;
                capacity: number;
                weightLimit: number;
              };
              - frame: {
                imeOfCreation: string;
                serial: string;
                lifespan: string;
                dateOfCreation: strig;
                details: string;
              };
              - chassis: {
                timeOfCreation: string;
                serial: string;
                lifespan: string;
                dateOfCreation: strig;
                details: string;
                rotationAngle: number;
                amountWheel: number;
              };
              - engine: {
                timeOfCreation: string;
                serial: string;
                brand: string;
                name: string;
                lifespan: string;
                power: number;
                consumption: string;
                efficiency: number;
                guarantee: string;
              };
              - electrics: {
                timeOfCreation: string;
                serial: string;
                brand: string;
                hasDynamic: boolean;
                hasNavigation: boolean;
                hasAutopilot: boolean;
                hasCamera: boolean;
                lifespan: string;
                hasSignalling: boolean;
              };
              - comfort: {
                imeOfCreation: string;
                serial: string;
                lifespan: string;
                vehicleEquipment: string;
                hasAirConditioner: boolean;
                hasMusicDevice: boolean;
                seat: Array<ISeat>;
              };
              - model: {
                  - material: string;
                  - amountOfDoors: number;
                  - sample: {
                    concept: string;
                    functionality: string;
                    height: number;
                    width: number;
                  }
              }
          }
  6. CInstrumentalNode
      - employees: Array<CEmployee>;
      - equipments: Array<CEquipment>;
      - installations: Array<CInstallation>;
      - checkEquipment(): void;
      - checkInstallation(): void;
      - checkDetails(): void;
      - checkNodes(): void;
      - buy(): void;
      - repair(): void;
      - createReport(): string;
  7. CFabric
      - controlBlock: СControlBlock;
      - nodes: CNodes;
      - instrumentalNode: CInstrumentalNode;
      - name: string;
      - geo: string;
      - createCar(type: string): CLadaType | CGAZType | CKamazType | CZAZType | CMAZType;



```typescript
  interface ISecurityReport {
    purpose: string;
    dateStart: string;
    vulnerabilities: Array<string>;
    dateEnd: string;
    employees: Array<CEmployee>;
    details: Array<string>;
  }
```

```typescript
  interface IInvestigations {
    purpose: string;
    dateStart: string;
    progress: number;
    budget: number;
    employees: Array<CEmployee>;
    profit: number;
  }
```

```typescript
  interface IFinancialReport {
    dateStart: string;
    dateEnd: string;
    depts: Array<string>;
    profit: number;
    wastage: number;
    bacon: number;
    budget: number;
    comments: Array<string>;
  }
```

```typescript
interface ISeat {
  amount: number;
  material: string;
  coating: string;
  color: string;
}
```

```typescript
interface IMusic {
  isPlaying: boolean;
  sound: string;
  list: string;
}
```

```typescript
interface IRadio extends IMusic {}
```