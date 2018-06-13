import { TestBed, inject } from "@angular/core/testing";

import { CalculadoraService } from "./calculadora.service";
import { ClassField } from "@angular/compiler";

describe("CalculadoraService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it("should be created", inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('deve garantir que 1 + 4 = 5', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }
  ));

  it('deve garantir que 9 - 2 = 7', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let subtracao = service.calcular(9, 2, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(7);
    }
  ));

  it('deve garantir que 106 / 2 = 53', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let divisao = service.calcular(106, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(53);
    }
  ));

  it('deve garantir que 8 * 8 = 64', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let multiplicacao = service.calcular(8, 8, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(64);
    }
  ));

  it('deve garantir 0 para uma operação inválida', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(8, 7, '%');
      expect(operacaoInvalida).toEqual(0);
    }
  ))
});
