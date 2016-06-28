import java.util.*;

public class SadCycles{
	
	public static void main(String[] args){
		SadCycles newRun = new SadCycles();
		newRun.findSadCycle();
		System.exit(0);
	}
	
	private int base;
	private int initNum;
	private int seqSum;
	
	public SadCycles(){
		Scanner keyboard = new Scanner(System.in);
		System.out.println("Please enter base power: ");
		base = keyboard.nextInt();
		System.out.println("Please enter initial number: ");
		initNum = keyboard.nextInt();
		seqSum = 0;
	}
	
	private int findSadCycle(int base, int initNum){
		int n = 0;
		int leadDigit = initNum.removeLeadDigit(initNum, n);
		n++;
		
		seqSum += Math.pow(leadDigit, 2);
		
		return seqSum;
		
		
	}
	
	private int removeLeadDigit(int i, int n){
		String iStr = Integer.toString(i);
		int leadDigit = Integer.parseInt(iStr.substring(n,n));
		return leadDigit;
	}
	
}