import { supabase } from '../lib/supabase-client';
import { readFileSync } from 'fs';
import { join } from 'path';

async function executeSQL(sql: string) {
  const statements = sql
    .split(';')
    .filter(stmt => stmt.trim())
    .map(stmt => stmt.trim() + ';');

  for (const statement of statements) {
    const { error } = await supabase.rpc('exec_sql', { sql: statement });
    
    if (error && !error.message.includes('already exists')) {
      throw error;
    }
  }
}

async function initDatabase() {
  try {
    console.log('Starting database initialization...');
    
    // Read and execute schema SQL
    console.log('Creating database schema...');
    const schemaSql = readFileSync(join(__dirname, 'init-database.sql'), 'utf8');
    await executeSQL(schemaSql);
    
    // Read and execute policies SQL
    console.log('Setting up row level security policies...');
    const policiesSql = readFileSync(join(__dirname, 'setup-policies.sql'), 'utf8');
    await executeSQL(policiesSql);
    
    console.log('Database initialization completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}

initDatabase();