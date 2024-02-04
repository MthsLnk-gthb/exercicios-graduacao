import java.text.NumberFormat;

public class Fatorial {

    public static void main(String[] args) {
        int numeroFatorialRecursivo = 10;
        long resultadoFatorialRecursivo = fatorialRecursivo(numeroFatorialRecursivo);
        System.out.println("O fatorial de " + numeroFatorialRecursivo + " é " +
                NumberFormat.getInstance().format(resultadoFatorialRecursivo));
    }

    public static long fatorialRecursivo(int numero) {
        if (numero < 0) {
            System.out.println("Fatorial não é definido para números negativos");
            return -1;
        } else if (numero == 0 || numero == 1) {
            return 1;
        } else {
            return numero * fatorialRecursivo(numero - 1);
        }
    }
}
