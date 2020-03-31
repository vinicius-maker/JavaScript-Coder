main(){

char vinho;

int cont1 = 0, cont2 = 0, cont3 = 0, contTotal =0;

double p1, p2, p3;

printf("Digite B, T, R ou F:");

do{

printf("\nGarrafa");

scanf("%s",&vinho);

switch (vinho){
	    case 'T': cont1 = cont1++; break;
	    case 'B': cont2 = cont2++; break;
	    case 'R': cont3 = cont3++; break;
	    case 'F': contTotal; exit(1);
	}

}

while(vinho == "F");
{
p1 = (cont1 * 100) / contTotal;

p2 = (cont2 * 100) / contTotal;

p3 = (cont3 * 100) / contTotal;

printf("Porcentagem para vinho tinto: %f ", p1);

printf("\nPorcentagem para vinho branco: %f ", p2);

printf("\nPorcentagem para vinho rose: %f ", p3);
}

}