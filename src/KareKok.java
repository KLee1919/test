
public class KareKok {
    public static void main(String[] args) {
        int[] mnr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        ma(mnr);
        for (int i = 0; i < mnr.length; i++)
            System.out.println(mnr[i]);
    }

    private static void ma(int[] a) {
        for (int i = a.length - 1; i >= 0; i--) {
            a[i]++;
        }
    }
}


