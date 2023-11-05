
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."educationLevel" AS ENUM (
    'primary',
    'secondary',
    'tertiary',
    'university',
    'postgraduate'
);

ALTER TYPE "public"."educationLevel" OWNER TO "postgres";

CREATE TYPE "public"."educationStatus" AS ENUM (
    'incomplete',
    'inProgress',
    'complete'
);

ALTER TYPE "public"."educationStatus" OWNER TO "postgres";

CREATE TYPE "public"."experienceLevel" AS ENUM (
    'needToBeTaught',
    'canDoWithHelp',
    'canDoAlone',
    'canTrainOthers',
    'haveTrainedOthers'
);

ALTER TYPE "public"."experienceLevel" OWNER TO "postgres";

CREATE TYPE "public"."identificationType" AS ENUM (
    'dni',
    'passport',
    'other'
);

ALTER TYPE "public"."identificationType" OWNER TO "postgres";

CREATE TYPE "public"."skillLevel" AS ENUM (
    'basic',
    'intermediate',
    'advanced'
);

ALTER TYPE "public"."skillLevel" OWNER TO "postgres";

CREATE TYPE "public"."visibility" AS ENUM (
    'public',
    'private'
);

ALTER TYPE "public"."visibility" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."applications" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT "now"() NOT NULL,
    "candidateId" "uuid" NOT NULL,
    "jobId" "uuid" NOT NULL,
    "otherRequirements" "jsonb"
);

ALTER TABLE "public"."applications" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."candidates" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT "now"() NOT NULL,
    "lastName" "text" NOT NULL,
    "firstName" "text" NOT NULL,
    "identificationType" "public"."identificationType" NOT NULL,
    "identificationNumber" "text" NOT NULL,
    "birthdate" timestamp with time zone,
    "email" "text" NOT NULL,
    "phone" bigint,
    "country" "text" NOT NULL,
    "state" "text",
    "address" "text",
    "locality" "text",
    "canRelocate" boolean,
    "experienceLevel" "public"."experienceLevel" NOT NULL,
    "bestSkills" "text" NOT NULL,
    "whyHireYou" "text" NOT NULL,
    "profilePicture" "text",
    "professionalProfile" "text",
    "languages" "text"[] NOT NULL,
    "acceptedTerms" boolean NOT NULL,
    "educationLevel" "public"."educationLevel" NOT NULL,
    "educationStatus" "public"."educationStatus" NOT NULL,
    "resume" "text"
);

ALTER TABLE "public"."candidates" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."companies" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "logo" "text"
);

ALTER TABLE "public"."companies" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."jobs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT "now"() NOT NULL,
    "title" "text" NOT NULL,
    "description" "text",
    "salary" numeric,
    "visibility" "public"."visibility" NOT NULL,
    "companyId" "uuid" NOT NULL,
    "otherRequirements" "jsonb"
);

ALTER TABLE "public"."jobs" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."savedJobs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "createdAt" timestamp with time zone DEFAULT "now"() NOT NULL,
    "candidateId" "uuid" NOT NULL,
    "jobId" "uuid" NOT NULL
);

ALTER TABLE "public"."savedJobs" OWNER TO "postgres";

ALTER TABLE ONLY "public"."candidates"
    ADD CONSTRAINT "applications_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."applications"
    ADD CONSTRAINT "applications_pkey1" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."companies"
    ADD CONSTRAINT "companies_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."jobs"
    ADD CONSTRAINT "jobs_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."savedJobs"
    ADD CONSTRAINT "savedJobs_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."applications"
    ADD CONSTRAINT "applications_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "public"."candidates"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."applications"
    ADD CONSTRAINT "applications_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."jobs"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."jobs"
    ADD CONSTRAINT "jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."savedJobs"
    ADD CONSTRAINT "savedJobs_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "public"."candidates"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."savedJobs"
    ADD CONSTRAINT "savedJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."jobs"("id") ON UPDATE CASCADE ON DELETE CASCADE;

CREATE POLICY "All" ON "public"."applications" USING (true) WITH CHECK (true);

CREATE POLICY "All" ON "public"."candidates" USING (true) WITH CHECK (true);

CREATE POLICY "All" ON "public"."companies" USING (true) WITH CHECK (true);

CREATE POLICY "All" ON "public"."jobs" USING (true) WITH CHECK (true);

CREATE POLICY "All" ON "public"."savedJobs" USING (true) WITH CHECK (true);

ALTER TABLE "public"."applications" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."candidates" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."companies" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."jobs" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."savedJobs" ENABLE ROW LEVEL SECURITY;

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."applications" TO "anon";
GRANT ALL ON TABLE "public"."applications" TO "authenticated";
GRANT ALL ON TABLE "public"."applications" TO "service_role";

GRANT ALL ON TABLE "public"."candidates" TO "anon";
GRANT ALL ON TABLE "public"."candidates" TO "authenticated";
GRANT ALL ON TABLE "public"."candidates" TO "service_role";

GRANT ALL ON TABLE "public"."companies" TO "anon";
GRANT ALL ON TABLE "public"."companies" TO "authenticated";
GRANT ALL ON TABLE "public"."companies" TO "service_role";

GRANT ALL ON TABLE "public"."jobs" TO "anon";
GRANT ALL ON TABLE "public"."jobs" TO "authenticated";
GRANT ALL ON TABLE "public"."jobs" TO "service_role";

GRANT ALL ON TABLE "public"."savedJobs" TO "anon";
GRANT ALL ON TABLE "public"."savedJobs" TO "authenticated";
GRANT ALL ON TABLE "public"."savedJobs" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
