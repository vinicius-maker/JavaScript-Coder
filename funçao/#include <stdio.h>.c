#include <stdio.h>
//a - peças produzidas
// b - defeituosas
// c - mais ou menos de A (10)
// m - maquinas

int main (void){    
    
    int p , d , c , m, i;

    printf("Quantas maquinas? ");
    scanf("%d",&m);
    
    for (i = 1; i <= m; i ++){
    
    printf("\n%dª maquina", i);
    printf("\nPecas produzidas? ");
    scanf("%d",&p);
    printf("Pecas defeituosas? " );
    scanf("%d",&d);
   
    c = (p * 0.1);
    if(c <= d)
    printf("Manutencao? sim");
    else
    printf("Manutencao? nao");
    getch ();
    }
    
    return 0;
}