import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "eventTeam" */
export type EventTeam = {
   __typename?: 'eventTeam';
  /** An object relationship */
  event: Events;
  eventId: Scalars['Int'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['Int'];
};

/** aggregated selection of "eventTeam" */
export type EventTeam_Aggregate = {
   __typename?: 'eventTeam_aggregate';
  aggregate?: Maybe<EventTeam_Aggregate_Fields>;
  nodes: Array<EventTeam>;
};

/** aggregate fields of "eventTeam" */
export type EventTeam_Aggregate_Fields = {
   __typename?: 'eventTeam_aggregate_fields';
  avg?: Maybe<EventTeam_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EventTeam_Max_Fields>;
  min?: Maybe<EventTeam_Min_Fields>;
  stddev?: Maybe<EventTeam_Stddev_Fields>;
  stddev_pop?: Maybe<EventTeam_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<EventTeam_Stddev_Samp_Fields>;
  sum?: Maybe<EventTeam_Sum_Fields>;
  var_pop?: Maybe<EventTeam_Var_Pop_Fields>;
  var_samp?: Maybe<EventTeam_Var_Samp_Fields>;
  variance?: Maybe<EventTeam_Variance_Fields>;
};


/** aggregate fields of "eventTeam" */
export type EventTeam_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<EventTeam_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "eventTeam" */
export type EventTeam_Aggregate_Order_By = {
  avg?: Maybe<EventTeam_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<EventTeam_Max_Order_By>;
  min?: Maybe<EventTeam_Min_Order_By>;
  stddev?: Maybe<EventTeam_Stddev_Order_By>;
  stddev_pop?: Maybe<EventTeam_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<EventTeam_Stddev_Samp_Order_By>;
  sum?: Maybe<EventTeam_Sum_Order_By>;
  var_pop?: Maybe<EventTeam_Var_Pop_Order_By>;
  var_samp?: Maybe<EventTeam_Var_Samp_Order_By>;
  variance?: Maybe<EventTeam_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "eventTeam" */
export type EventTeam_Arr_Rel_Insert_Input = {
  data: Array<EventTeam_Insert_Input>;
  on_conflict?: Maybe<EventTeam_On_Conflict>;
};

/** aggregate avg on columns */
export type EventTeam_Avg_Fields = {
   __typename?: 'eventTeam_avg_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "eventTeam" */
export type EventTeam_Avg_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eventTeam". All fields are combined with a logical 'AND'. */
export type EventTeam_Bool_Exp = {
  _and?: Maybe<Array<Maybe<EventTeam_Bool_Exp>>>;
  _not?: Maybe<EventTeam_Bool_Exp>;
  _or?: Maybe<Array<Maybe<EventTeam_Bool_Exp>>>;
  event?: Maybe<Events_Bool_Exp>;
  eventId?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "eventTeam" */
export enum EventTeam_Constraint {
  /** unique or primary key constraint */
  EventTeamPkey = 'eventTeam_pkey'
}

/** input type for incrementing integer columne in table "eventTeam" */
export type EventTeam_Inc_Input = {
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "eventTeam" */
export type EventTeam_Insert_Input = {
  event?: Maybe<Events_Obj_Rel_Insert_Input>;
  eventId?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type EventTeam_Max_Fields = {
   __typename?: 'eventTeam_max_fields';
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "eventTeam" */
export type EventTeam_Max_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type EventTeam_Min_Fields = {
   __typename?: 'eventTeam_min_fields';
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "eventTeam" */
export type EventTeam_Min_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** response of any mutation on the table "eventTeam" */
export type EventTeam_Mutation_Response = {
   __typename?: 'eventTeam_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<EventTeam>;
};

/** input type for inserting object relation for remote table "eventTeam" */
export type EventTeam_Obj_Rel_Insert_Input = {
  data: EventTeam_Insert_Input;
  on_conflict?: Maybe<EventTeam_On_Conflict>;
};

/** on conflict condition type for table "eventTeam" */
export type EventTeam_On_Conflict = {
  constraint: EventTeam_Constraint;
  update_columns: Array<EventTeam_Update_Column>;
  where?: Maybe<EventTeam_Bool_Exp>;
};

/** ordering options when selecting data from "eventTeam" */
export type EventTeam_Order_By = {
  event?: Maybe<Events_Order_By>;
  eventId?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
};

/** select columns of table "eventTeam" */
export enum EventTeam_Select_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "eventTeam" */
export type EventTeam_Set_Input = {
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type EventTeam_Stddev_Fields = {
   __typename?: 'eventTeam_stddev_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "eventTeam" */
export type EventTeam_Stddev_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type EventTeam_Stddev_Pop_Fields = {
   __typename?: 'eventTeam_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "eventTeam" */
export type EventTeam_Stddev_Pop_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type EventTeam_Stddev_Samp_Fields = {
   __typename?: 'eventTeam_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "eventTeam" */
export type EventTeam_Stddev_Samp_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type EventTeam_Sum_Fields = {
   __typename?: 'eventTeam_sum_fields';
  eventId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "eventTeam" */
export type EventTeam_Sum_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** update columns of table "eventTeam" */
export enum EventTeam_Update_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  TeamId = 'teamId'
}

/** aggregate var_pop on columns */
export type EventTeam_Var_Pop_Fields = {
   __typename?: 'eventTeam_var_pop_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "eventTeam" */
export type EventTeam_Var_Pop_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type EventTeam_Var_Samp_Fields = {
   __typename?: 'eventTeam_var_samp_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "eventTeam" */
export type EventTeam_Var_Samp_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type EventTeam_Variance_Fields = {
   __typename?: 'eventTeam_variance_fields';
  eventId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "eventTeam" */
export type EventTeam_Variance_Order_By = {
  eventId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** columns and relationships of "events" */
export type Events = {
   __typename?: 'events';
  gamepedia?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  liquipedia?: Maybe<Scalars['String']>;
  lolEsports?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scheduleEnd: Scalars['date'];
  scheduleStart: Scalars['date'];
  /** An array relationship */
  teams: Array<EventTeam>;
  /** An aggregated array relationship */
  teams_aggregate: EventTeam_Aggregate;
};


/** columns and relationships of "events" */
export type EventsTeamsArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
   __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
   __typename?: 'events_aggregate_fields';
  avg?: Maybe<Events_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Events_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "events" */
export type Events_Aggregate_Order_By = {
  avg?: Maybe<Events_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Events_Max_Order_By>;
  min?: Maybe<Events_Min_Order_By>;
  stddev?: Maybe<Events_Stddev_Order_By>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Order_By>;
  sum?: Maybe<Events_Sum_Order_By>;
  var_pop?: Maybe<Events_Var_Pop_Order_By>;
  var_samp?: Maybe<Events_Var_Samp_Order_By>;
  variance?: Maybe<Events_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "events" */
export type Events_Arr_Rel_Insert_Input = {
  data: Array<Events_Insert_Input>;
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
   __typename?: 'events_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "events" */
export type Events_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Events_Bool_Exp>>>;
  _not?: Maybe<Events_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Events_Bool_Exp>>>;
  gamepedia?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  liquipedia?: Maybe<String_Comparison_Exp>;
  lolEsports?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  scheduleEnd?: Maybe<Date_Comparison_Exp>;
  scheduleStart?: Maybe<Date_Comparison_Exp>;
  teams?: Maybe<EventTeam_Bool_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint */
  EventsPkey = 'events_pkey'
}

/** input type for incrementing integer columne in table "events" */
export type Events_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  gamepedia?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  lolEsports?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['date']>;
  scheduleStart?: Maybe<Scalars['date']>;
  teams?: Maybe<EventTeam_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
   __typename?: 'events_max_fields';
  gamepedia?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  lolEsports?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['date']>;
  scheduleStart?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "events" */
export type Events_Max_Order_By = {
  gamepedia?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  lolEsports?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  scheduleEnd?: Maybe<Order_By>;
  scheduleStart?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
   __typename?: 'events_min_fields';
  gamepedia?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  lolEsports?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['date']>;
  scheduleStart?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "events" */
export type Events_Min_Order_By = {
  gamepedia?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  lolEsports?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  scheduleEnd?: Maybe<Order_By>;
  scheduleStart?: Maybe<Order_By>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
   __typename?: 'events_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type Events_Obj_Rel_Insert_Input = {
  data: Events_Insert_Input;
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** on conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns: Array<Events_Update_Column>;
  where?: Maybe<Events_Bool_Exp>;
};

/** ordering options when selecting data from "events" */
export type Events_Order_By = {
  gamepedia?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  lolEsports?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  scheduleEnd?: Maybe<Order_By>;
  scheduleStart?: Maybe<Order_By>;
  teams_aggregate?: Maybe<EventTeam_Aggregate_Order_By>;
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  Gamepedia = 'gamepedia',
  /** column name */
  Id = 'id',
  /** column name */
  Liquipedia = 'liquipedia',
  /** column name */
  LolEsports = 'lolEsports',
  /** column name */
  Name = 'name',
  /** column name */
  ScheduleEnd = 'scheduleEnd',
  /** column name */
  ScheduleStart = 'scheduleStart'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  gamepedia?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  lolEsports?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['date']>;
  scheduleStart?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
   __typename?: 'events_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "events" */
export type Events_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
   __typename?: 'events_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "events" */
export type Events_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
   __typename?: 'events_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "events" */
export type Events_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
   __typename?: 'events_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "events" */
export type Events_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  Gamepedia = 'gamepedia',
  /** column name */
  Id = 'id',
  /** column name */
  Liquipedia = 'liquipedia',
  /** column name */
  LolEsports = 'lolEsports',
  /** column name */
  Name = 'name',
  /** column name */
  ScheduleEnd = 'scheduleEnd',
  /** column name */
  ScheduleStart = 'scheduleStart'
}

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
   __typename?: 'events_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "events" */
export type Events_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
   __typename?: 'events_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "events" */
export type Events_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
   __typename?: 'events_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "events" */
export type Events_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "eventTeam" */
  delete_eventTeam?: Maybe<EventTeam_Mutation_Response>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete data from the table: "playerTeam" */
  delete_playerTeam?: Maybe<PlayerTeam_Mutation_Response>;
  /** delete data from the table: "players" */
  delete_players?: Maybe<Players_Mutation_Response>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** insert data into the table: "eventTeam" */
  insert_eventTeam?: Maybe<EventTeam_Mutation_Response>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert data into the table: "playerTeam" */
  insert_playerTeam?: Maybe<PlayerTeam_Mutation_Response>;
  /** insert data into the table: "players" */
  insert_players?: Maybe<Players_Mutation_Response>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** update data of the table: "eventTeam" */
  update_eventTeam?: Maybe<EventTeam_Mutation_Response>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update data of the table: "playerTeam" */
  update_playerTeam?: Maybe<PlayerTeam_Mutation_Response>;
  /** update data of the table: "players" */
  update_players?: Maybe<Players_Mutation_Response>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_EventTeamArgs = {
  where: EventTeam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PlayerTeamArgs = {
  where: PlayerTeam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PlayersArgs = {
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_EventTeamArgs = {
  objects: Array<EventTeam_Insert_Input>;
  on_conflict?: Maybe<EventTeam_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: Maybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayerTeamArgs = {
  objects: Array<PlayerTeam_Insert_Input>;
  on_conflict?: Maybe<PlayerTeam_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayersArgs = {
  objects: Array<Players_Insert_Input>;
  on_conflict?: Maybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EventTeamArgs = {
  _inc?: Maybe<EventTeam_Inc_Input>;
  _set?: Maybe<EventTeam_Set_Input>;
  where: EventTeam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _inc?: Maybe<Events_Inc_Input>;
  _set?: Maybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PlayerTeamArgs = {
  _inc?: Maybe<PlayerTeam_Inc_Input>;
  _set?: Maybe<PlayerTeam_Set_Input>;
  where: PlayerTeam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PlayersArgs = {
  _inc?: Maybe<Players_Inc_Input>;
  _set?: Maybe<Players_Set_Input>;
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _inc?: Maybe<Teams_Inc_Input>;
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "playerTeam" */
export type PlayerTeam = {
   __typename?: 'playerTeam';
  /** An object relationship */
  player: Players;
  playerId: Scalars['Int'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['Int'];
};

/** aggregated selection of "playerTeam" */
export type PlayerTeam_Aggregate = {
   __typename?: 'playerTeam_aggregate';
  aggregate?: Maybe<PlayerTeam_Aggregate_Fields>;
  nodes: Array<PlayerTeam>;
};

/** aggregate fields of "playerTeam" */
export type PlayerTeam_Aggregate_Fields = {
   __typename?: 'playerTeam_aggregate_fields';
  avg?: Maybe<PlayerTeam_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PlayerTeam_Max_Fields>;
  min?: Maybe<PlayerTeam_Min_Fields>;
  stddev?: Maybe<PlayerTeam_Stddev_Fields>;
  stddev_pop?: Maybe<PlayerTeam_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PlayerTeam_Stddev_Samp_Fields>;
  sum?: Maybe<PlayerTeam_Sum_Fields>;
  var_pop?: Maybe<PlayerTeam_Var_Pop_Fields>;
  var_samp?: Maybe<PlayerTeam_Var_Samp_Fields>;
  variance?: Maybe<PlayerTeam_Variance_Fields>;
};


/** aggregate fields of "playerTeam" */
export type PlayerTeam_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PlayerTeam_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "playerTeam" */
export type PlayerTeam_Aggregate_Order_By = {
  avg?: Maybe<PlayerTeam_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<PlayerTeam_Max_Order_By>;
  min?: Maybe<PlayerTeam_Min_Order_By>;
  stddev?: Maybe<PlayerTeam_Stddev_Order_By>;
  stddev_pop?: Maybe<PlayerTeam_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<PlayerTeam_Stddev_Samp_Order_By>;
  sum?: Maybe<PlayerTeam_Sum_Order_By>;
  var_pop?: Maybe<PlayerTeam_Var_Pop_Order_By>;
  var_samp?: Maybe<PlayerTeam_Var_Samp_Order_By>;
  variance?: Maybe<PlayerTeam_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "playerTeam" */
export type PlayerTeam_Arr_Rel_Insert_Input = {
  data: Array<PlayerTeam_Insert_Input>;
  on_conflict?: Maybe<PlayerTeam_On_Conflict>;
};

/** aggregate avg on columns */
export type PlayerTeam_Avg_Fields = {
   __typename?: 'playerTeam_avg_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "playerTeam" */
export type PlayerTeam_Avg_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "playerTeam". All fields are combined with a logical 'AND'. */
export type PlayerTeam_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PlayerTeam_Bool_Exp>>>;
  _not?: Maybe<PlayerTeam_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PlayerTeam_Bool_Exp>>>;
  player?: Maybe<Players_Bool_Exp>;
  playerId?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "playerTeam" */
export enum PlayerTeam_Constraint {
  /** unique or primary key constraint */
  PlayerTeamPkey = 'playerTeam_pkey'
}

/** input type for incrementing integer columne in table "playerTeam" */
export type PlayerTeam_Inc_Input = {
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "playerTeam" */
export type PlayerTeam_Insert_Input = {
  player?: Maybe<Players_Obj_Rel_Insert_Input>;
  playerId?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type PlayerTeam_Max_Fields = {
   __typename?: 'playerTeam_max_fields';
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "playerTeam" */
export type PlayerTeam_Max_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PlayerTeam_Min_Fields = {
   __typename?: 'playerTeam_min_fields';
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "playerTeam" */
export type PlayerTeam_Min_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** response of any mutation on the table "playerTeam" */
export type PlayerTeam_Mutation_Response = {
   __typename?: 'playerTeam_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PlayerTeam>;
};

/** input type for inserting object relation for remote table "playerTeam" */
export type PlayerTeam_Obj_Rel_Insert_Input = {
  data: PlayerTeam_Insert_Input;
  on_conflict?: Maybe<PlayerTeam_On_Conflict>;
};

/** on conflict condition type for table "playerTeam" */
export type PlayerTeam_On_Conflict = {
  constraint: PlayerTeam_Constraint;
  update_columns: Array<PlayerTeam_Update_Column>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};

/** ordering options when selecting data from "playerTeam" */
export type PlayerTeam_Order_By = {
  player?: Maybe<Players_Order_By>;
  playerId?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
};

/** select columns of table "playerTeam" */
export enum PlayerTeam_Select_Column {
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "playerTeam" */
export type PlayerTeam_Set_Input = {
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type PlayerTeam_Stddev_Fields = {
   __typename?: 'playerTeam_stddev_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "playerTeam" */
export type PlayerTeam_Stddev_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PlayerTeam_Stddev_Pop_Fields = {
   __typename?: 'playerTeam_stddev_pop_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "playerTeam" */
export type PlayerTeam_Stddev_Pop_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PlayerTeam_Stddev_Samp_Fields = {
   __typename?: 'playerTeam_stddev_samp_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "playerTeam" */
export type PlayerTeam_Stddev_Samp_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type PlayerTeam_Sum_Fields = {
   __typename?: 'playerTeam_sum_fields';
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "playerTeam" */
export type PlayerTeam_Sum_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** update columns of table "playerTeam" */
export enum PlayerTeam_Update_Column {
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  TeamId = 'teamId'
}

/** aggregate var_pop on columns */
export type PlayerTeam_Var_Pop_Fields = {
   __typename?: 'playerTeam_var_pop_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "playerTeam" */
export type PlayerTeam_Var_Pop_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PlayerTeam_Var_Samp_Fields = {
   __typename?: 'playerTeam_var_samp_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "playerTeam" */
export type PlayerTeam_Var_Samp_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type PlayerTeam_Variance_Fields = {
   __typename?: 'playerTeam_variance_fields';
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "playerTeam" */
export type PlayerTeam_Variance_Order_By = {
  playerId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** columns and relationships of "players" */
export type Players = {
   __typename?: 'players';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  role: Roles;
  roleId: Scalars['Int'];
  starter: Scalars['Boolean'];
  /** An array relationship */
  teams: Array<PlayerTeam>;
  /** An aggregated array relationship */
  teams_aggregate: PlayerTeam_Aggregate;
};


/** columns and relationships of "players" */
export type PlayersTeamsArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};

/** aggregated selection of "players" */
export type Players_Aggregate = {
   __typename?: 'players_aggregate';
  aggregate?: Maybe<Players_Aggregate_Fields>;
  nodes: Array<Players>;
};

/** aggregate fields of "players" */
export type Players_Aggregate_Fields = {
   __typename?: 'players_aggregate_fields';
  avg?: Maybe<Players_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Players_Max_Fields>;
  min?: Maybe<Players_Min_Fields>;
  stddev?: Maybe<Players_Stddev_Fields>;
  stddev_pop?: Maybe<Players_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Players_Stddev_Samp_Fields>;
  sum?: Maybe<Players_Sum_Fields>;
  var_pop?: Maybe<Players_Var_Pop_Fields>;
  var_samp?: Maybe<Players_Var_Samp_Fields>;
  variance?: Maybe<Players_Variance_Fields>;
};


/** aggregate fields of "players" */
export type Players_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Players_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "players" */
export type Players_Aggregate_Order_By = {
  avg?: Maybe<Players_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Players_Max_Order_By>;
  min?: Maybe<Players_Min_Order_By>;
  stddev?: Maybe<Players_Stddev_Order_By>;
  stddev_pop?: Maybe<Players_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Players_Stddev_Samp_Order_By>;
  sum?: Maybe<Players_Sum_Order_By>;
  var_pop?: Maybe<Players_Var_Pop_Order_By>;
  var_samp?: Maybe<Players_Var_Samp_Order_By>;
  variance?: Maybe<Players_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "players" */
export type Players_Arr_Rel_Insert_Input = {
  data: Array<Players_Insert_Input>;
  on_conflict?: Maybe<Players_On_Conflict>;
};

/** aggregate avg on columns */
export type Players_Avg_Fields = {
   __typename?: 'players_avg_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "players" */
export type Players_Avg_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Players_Bool_Exp>>>;
  _not?: Maybe<Players_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Players_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  roleId?: Maybe<Int_Comparison_Exp>;
  starter?: Maybe<Boolean_Comparison_Exp>;
  teams?: Maybe<PlayerTeam_Bool_Exp>;
};

/** unique or primary key constraints on table "players" */
export enum Players_Constraint {
  /** unique or primary key constraint */
  PlayersPkey = 'players_pkey'
}

/** input type for incrementing integer columne in table "players" */
export type Players_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "players" */
export type Players_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  roleId?: Maybe<Scalars['Int']>;
  starter?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<PlayerTeam_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Players_Max_Fields = {
   __typename?: 'players_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "players" */
export type Players_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Players_Min_Fields = {
   __typename?: 'players_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "players" */
export type Players_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** response of any mutation on the table "players" */
export type Players_Mutation_Response = {
   __typename?: 'players_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Players>;
};

/** input type for inserting object relation for remote table "players" */
export type Players_Obj_Rel_Insert_Input = {
  data: Players_Insert_Input;
  on_conflict?: Maybe<Players_On_Conflict>;
};

/** on conflict condition type for table "players" */
export type Players_On_Conflict = {
  constraint: Players_Constraint;
  update_columns: Array<Players_Update_Column>;
  where?: Maybe<Players_Bool_Exp>;
};

/** ordering options when selecting data from "players" */
export type Players_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  roleId?: Maybe<Order_By>;
  starter?: Maybe<Order_By>;
  teams_aggregate?: Maybe<PlayerTeam_Aggregate_Order_By>;
};

/** select columns of table "players" */
export enum Players_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  Starter = 'starter'
}

/** input type for updating data in table "players" */
export type Players_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  starter?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Players_Stddev_Fields = {
   __typename?: 'players_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "players" */
export type Players_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Players_Stddev_Pop_Fields = {
   __typename?: 'players_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "players" */
export type Players_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Players_Stddev_Samp_Fields = {
   __typename?: 'players_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "players" */
export type Players_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Players_Sum_Fields = {
   __typename?: 'players_sum_fields';
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "players" */
export type Players_Sum_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** update columns of table "players" */
export enum Players_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  Starter = 'starter'
}

/** aggregate var_pop on columns */
export type Players_Var_Pop_Fields = {
   __typename?: 'players_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "players" */
export type Players_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Players_Var_Samp_Fields = {
   __typename?: 'players_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "players" */
export type Players_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Players_Variance_Fields = {
   __typename?: 'players_variance_fields';
  id?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "players" */
export type Players_Variance_Order_By = {
  id?: Maybe<Order_By>;
  roleId?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "eventTeam" */
  eventTeam: Array<EventTeam>;
  /** fetch aggregated fields from the table: "eventTeam" */
  eventTeam_aggregate: EventTeam_Aggregate;
  /** fetch data from the table: "eventTeam" using primary key columns */
  eventTeam_by_pk?: Maybe<EventTeam>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "playerTeam" */
  playerTeam: Array<PlayerTeam>;
  /** fetch aggregated fields from the table: "playerTeam" */
  playerTeam_aggregate: PlayerTeam_Aggregate;
  /** fetch data from the table: "playerTeam" using primary key columns */
  playerTeam_by_pk?: Maybe<PlayerTeam>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
};


/** query root */
export type Query_RootEventTeamArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** query root */
export type Query_RootEventTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** query root */
export type Query_RootEventTeam_By_PkArgs = {
  eventId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** query root */
export type Query_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** query root */
export type Query_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** query root */
export type Query_RootEvents_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPlayerTeamArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerTeam_By_PkArgs = {
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** query root */
export type Query_RootPlayersArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


/** query root */
export type Query_RootPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


/** query root */
export type Query_RootPlayers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "roles" */
export type Roles = {
   __typename?: 'roles';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  players: Array<Players>;
  /** An aggregated array relationship */
  players_aggregate: Players_Aggregate;
  shortName: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesPlayersArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
   __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
   __typename?: 'roles_aggregate_fields';
  avg?: Maybe<Roles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  avg?: Maybe<Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
  stddev?: Maybe<Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<Roles_Sum_Order_By>;
  var_pop?: Maybe<Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<Roles_Var_Samp_Order_By>;
  variance?: Maybe<Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
   __typename?: 'roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "roles" */
export type Roles_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  players?: Maybe<Players_Bool_Exp>;
  shortName?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing integer columne in table "roles" */
export type Roles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  players?: Maybe<Players_Arr_Rel_Insert_Input>;
  shortName?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
   __typename?: 'roles_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
   __typename?: 'roles_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
   __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  players_aggregate?: Maybe<Players_Aggregate_Order_By>;
  shortName?: Maybe<Order_By>;
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
   __typename?: 'roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "roles" */
export type Roles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
   __typename?: 'roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "roles" */
export type Roles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
   __typename?: 'roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "roles" */
export type Roles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
   __typename?: 'roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "roles" */
export type Roles_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName'
}

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
   __typename?: 'roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "roles" */
export type Roles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
   __typename?: 'roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "roles" */
export type Roles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
   __typename?: 'roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "roles" */
export type Roles_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "eventTeam" */
  eventTeam: Array<EventTeam>;
  /** fetch aggregated fields from the table: "eventTeam" */
  eventTeam_aggregate: EventTeam_Aggregate;
  /** fetch data from the table: "eventTeam" using primary key columns */
  eventTeam_by_pk?: Maybe<EventTeam>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "playerTeam" */
  playerTeam: Array<PlayerTeam>;
  /** fetch aggregated fields from the table: "playerTeam" */
  playerTeam_aggregate: PlayerTeam_Aggregate;
  /** fetch data from the table: "playerTeam" using primary key columns */
  playerTeam_by_pk?: Maybe<PlayerTeam>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: Players_Aggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
};


/** subscription root */
export type Subscription_RootEventTeamArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEventTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEventTeam_By_PkArgs = {
  eventId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPlayerTeamArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerTeam_By_PkArgs = {
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPlayersArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "teams" */
export type Teams = {
   __typename?: 'teams';
  /** An array relationship */
  events: Array<EventTeam>;
  /** An aggregated array relationship */
  events_aggregate: EventTeam_Aggregate;
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  liquipedia?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  players: Array<PlayerTeam>;
  /** An aggregated array relationship */
  players_aggregate: PlayerTeam_Aggregate;
  shortName: Scalars['String'];
  subreddit?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** columns and relationships of "teams" */
export type TeamsEventsArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<EventTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<EventTeam_Order_By>>;
  where?: Maybe<EventTeam_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsPlayersArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerTeam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerTeam_Order_By>>;
  where?: Maybe<PlayerTeam_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
   __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
   __typename?: 'teams_aggregate_fields';
  avg?: Maybe<Teams_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
  stddev?: Maybe<Teams_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Sum_Fields>;
  var_pop?: Maybe<Teams_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Var_Samp_Fields>;
  variance?: Maybe<Teams_Variance_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  avg?: Maybe<Teams_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
  stddev?: Maybe<Teams_Stddev_Order_By>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Order_By>;
  sum?: Maybe<Teams_Sum_Order_By>;
  var_pop?: Maybe<Teams_Var_Pop_Order_By>;
  var_samp?: Maybe<Teams_Var_Samp_Order_By>;
  variance?: Maybe<Teams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** aggregate avg on columns */
export type Teams_Avg_Fields = {
   __typename?: 'teams_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teams" */
export type Teams_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  events?: Maybe<EventTeam_Bool_Exp>;
  facebook?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  liquipedia?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  players?: Maybe<PlayerTeam_Bool_Exp>;
  shortName?: Maybe<String_Comparison_Exp>;
  subreddit?: Maybe<String_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
  youtube?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for incrementing integer columne in table "teams" */
export type Teams_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  events?: Maybe<EventTeam_Arr_Rel_Insert_Input>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  players?: Maybe<PlayerTeam_Arr_Rel_Insert_Input>;
  shortName?: Maybe<Scalars['String']>;
  subreddit?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
   __typename?: 'teams_max_fields';
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  subreddit?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  subreddit?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
   __typename?: 'teams_min_fields';
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  subreddit?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  subreddit?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
   __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  events_aggregate?: Maybe<EventTeam_Aggregate_Order_By>;
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  liquipedia?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  players_aggregate?: Maybe<PlayerTeam_Aggregate_Order_By>;
  shortName?: Maybe<Order_By>;
  subreddit?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Liquipedia = 'liquipedia',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Subreddit = 'subreddit',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Website = 'website',
  /** column name */
  Youtube = 'youtube'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  liquipedia?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  subreddit?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Teams_Stddev_Fields = {
   __typename?: 'teams_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teams" */
export type Teams_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teams_Stddev_Pop_Fields = {
   __typename?: 'teams_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teams" */
export type Teams_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teams_Stddev_Samp_Fields = {
   __typename?: 'teams_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teams" */
export type Teams_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Teams_Sum_Fields = {
   __typename?: 'teams_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teams" */
export type Teams_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Liquipedia = 'liquipedia',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Subreddit = 'subreddit',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Website = 'website',
  /** column name */
  Youtube = 'youtube'
}

/** aggregate var_pop on columns */
export type Teams_Var_Pop_Fields = {
   __typename?: 'teams_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teams" */
export type Teams_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teams_Var_Samp_Fields = {
   __typename?: 'teams_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teams" */
export type Teams_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Teams_Variance_Fields = {
   __typename?: 'teams_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teams" */
export type Teams_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type FetchTeamsAndRolesQueryVariables = {};


export type FetchTeamsAndRolesQuery = (
  { __typename?: 'query_root' }
  & { teams: Array<(
    { __typename?: 'teams' }
    & Pick<Teams, 'id' | 'name'>
  )>, roles: Array<(
    { __typename?: 'roles' }
    & Pick<Roles, 'id' | 'shortName'>
  )> }
);

export type FetchPlayersQueryVariables = {};


export type FetchPlayersQuery = (
  { __typename?: 'query_root' }
  & { players: Array<(
    { __typename?: 'players' }
    & Pick<Players, 'id' | 'name'>
    & { role: (
      { __typename?: 'roles' }
      & Pick<Roles, 'id' | 'shortName'>
    ), teams: Array<(
      { __typename?: 'playerTeam' }
      & { team: (
        { __typename?: 'teams' }
        & Pick<Teams, 'id' | 'name'>
      ) }
    )> }
  )> }
);


export const FetchTeamsAndRolesDocument = gql`
    query fetchTeamsAndRoles {
  teams {
    id
    name
  }
  roles {
    id
    shortName
  }
}
    `;

/**
 * __useFetchTeamsAndRolesQuery__
 *
 * To run a query within a React component, call `useFetchTeamsAndRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTeamsAndRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTeamsAndRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchTeamsAndRolesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchTeamsAndRolesQuery, FetchTeamsAndRolesQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchTeamsAndRolesQuery, FetchTeamsAndRolesQueryVariables>(FetchTeamsAndRolesDocument, baseOptions);
      }
export function useFetchTeamsAndRolesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchTeamsAndRolesQuery, FetchTeamsAndRolesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchTeamsAndRolesQuery, FetchTeamsAndRolesQueryVariables>(FetchTeamsAndRolesDocument, baseOptions);
        }
export type FetchTeamsAndRolesQueryHookResult = ReturnType<typeof useFetchTeamsAndRolesQuery>;
export type FetchTeamsAndRolesLazyQueryHookResult = ReturnType<typeof useFetchTeamsAndRolesLazyQuery>;
export type FetchTeamsAndRolesQueryResult = ApolloReactCommon.QueryResult<FetchTeamsAndRolesQuery, FetchTeamsAndRolesQueryVariables>;
export const FetchPlayersDocument = gql`
    query fetchPlayers {
  players {
    id
    name
    role {
      id
      shortName
    }
    teams {
      team {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useFetchPlayersQuery__
 *
 * To run a query within a React component, call `useFetchPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPlayersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchPlayersQuery, FetchPlayersQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchPlayersQuery, FetchPlayersQueryVariables>(FetchPlayersDocument, baseOptions);
      }
export function useFetchPlayersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchPlayersQuery, FetchPlayersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchPlayersQuery, FetchPlayersQueryVariables>(FetchPlayersDocument, baseOptions);
        }
export type FetchPlayersQueryHookResult = ReturnType<typeof useFetchPlayersQuery>;
export type FetchPlayersLazyQueryHookResult = ReturnType<typeof useFetchPlayersLazyQuery>;
export type FetchPlayersQueryResult = ApolloReactCommon.QueryResult<FetchPlayersQuery, FetchPlayersQueryVariables>;