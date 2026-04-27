import { createClient } from '@supabase/supabase-js';

// 1. 환경 변수를 가져옵니다.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// 2. 배포 환경에서 변수가 비어있는지 콘솔에서 바로 확인할 수 있도록 체크 로직을 넣습니다.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "🚨 [Supabase] 환경 변수를 찾을 수 없습니다! Cloudflare 설정을 확인하세요.",
    { url: supabaseUrl, key: supabaseAnonKey ? "있음" : "없음" }
  );
}

// 3. 클라이언트를 생성합니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // 세션 유지 설정
    autoRefreshToken: true,
  },
});
