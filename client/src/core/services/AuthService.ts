export interface Account {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }
  
  export async function registerAccount(account: Account): Promise<Account> {
    return new Promise<Account>((resolve) => {
      setTimeout(() => {
        console.log(`Registering account for ${account.email}...`);
        // Perform registration logic here
        resolve(account);
      }, 2000);
    });
  }
  